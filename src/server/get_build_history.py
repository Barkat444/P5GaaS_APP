# import requests
# from bs4 import BeautifulSoup
# import json
# import urllib3
# import json

# urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


# # Path to the JSON file
# json_file_path = "src/ipAddresses.json"

# # Read the JSON file
# with open(json_file_path, 'r') as json_file:
#     ip_data = json.load(json_file)

# # Access the stored IP address
# NAT_IP = ip_data.get('ipAddress', '')


# # Define Jenkins credentials and URL
# # NAT_IP = "10.84.124.21"
# jenkins_url = f'https://pats-patsexecutor.{NAT_IP}.nip.io/job/Functional-Scenarios/'
# jenkins_url_customized = f'https://pats-patsexecutor.{NAT_IP}.nip.io'
# username = "pats"
# password = "Starent@123"

# try:
#     response = requests.get(jenkins_url, auth=(username, password), verify=False)

#     soup = BeautifulSoup(response.text, "html.parser")
#     build_history_data = []
#     build_rows = soup.find_all('tr', class_='build-row')
    
#     for row in build_rows:
#         build_data = {}
#         # Extract the build number from the 'a' element with class 'build-link'
#         build_link_element = row.find('a', class_='build-link')
#         if build_link_element:
#             build_data['build_number'] = build_link_element.text.strip()
#         else:
#             build_data['build_number'] = 'No Items Recieved'  

#         # Extract the build status from the 'alt' attribute of the 'img' element
#         build_status_element = row.find('img', class_='icon-red') or row.find('img', class_='icon-blue')
#         if build_status_element:
#             build_status = build_status_element['alt']
#             build_status = build_status.replace(" > Console Output", "")
#             build_data['build_status'] = build_status
#         else:
#             build_data['build_status'] = 'Aborted'  
        
#         # Extract the build timestamp from the 'div' element with class 'pane build-details'
#         build_details_element = row.find('div', class_='pane build-details')
#         if build_details_element:
#             build_data['build_timestamp'] = build_details_element.text.strip()
#         else:
#             build_data['build_timestamp'] = 'No Items Recieved'  
        
#         # Check if the 'pane desc' element exists before accessing its 'text' attribute
#         build_description_element = row.find('div', class_='pane desc')
#         if build_description_element:
#             build_data['build_description'] = build_description_element.text.strip()
#         else:
#             build_data['build_description'] = 'No Items Recieved'
        
#         # Extract the build link from the 'href' attribute of the 'a' element
#         build_link_element = row.find('a', class_='build-status-link')
#         if build_link_element:
#             build_link = build_link_element['href']
#             if not build_link.startswith('http'):
#                 build_data['build_link'] = f"{jenkins_url_customized}{build_link}"
#         else:
#             build_data['build_link'] = 'No Items Recieved'  

#         # Construct the pats_report link by appending '/PATSReport/' to the build_link
#         build_data['pats_report'] = f"{build_data['build_link'].replace('/console', '/PATSReport')}"
#         build_history_data.append(build_data)

#         # Remove the last element in the list
#     if build_history_data:
#         build_history_data.pop()

#     # Save the build history data to a JSON file
#         with open('build_history.json', 'w') as json_file:
#             json.dump(build_history_data, json_file, indent=4)
        
#         print('Build history data saved to build_history.json')
#     else:
#         print(f"Failed to retrieve the page. Status code: {response.status_code}")

# except requests.exceptions.RequestException as e:
#     print(f"An error occurred while accessing the Jenkins URL: Please Check whether the NAT IP is accessible : {e}")





import requests
from bs4 import BeautifulSoup
import json
import urllib3
import json
import sys
import os

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# Check if an IP address argument is provided
if len(sys.argv) < 2:
    print("Usage: python your_script.py <ip_address>")
    sys.exit(1)

# Get the IP address from the command-line argument
NAT_IP = sys.argv[1]

# Define Jenkins credentials and URLs
jenkins_url_functional = f'https://pats-patsexecutor.{NAT_IP}.nip.io/job/Functional-Scenarios/'
jenkins_url_regression = 'http://eig-jenkins.cisco.com:9500/job/P5G_Regression/'
jenkins_url_deployment = 'http://eig-jenkins.cisco.com:7600/job/Deployer/job/P5G_AMF_SMF_UPF_Deployer/'
jenkins_url_system = 'http://eig-jenkins.cisco.com:9500/job/P5G_System_Test_BV/'
jenkins_url_customized = f'https://pats-patsexecutor.{NAT_IP}.nip.io'
username = "pats"
password = "Starent@123"
script_dir = os.path.dirname(os.path.abspath(__file__))

def extract_build_data_functional():
    response = requests.get(jenkins_url_functional, auth=(username, password), verify=False, timeout=1)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    build_history_data = []

    for row in soup.find_all('tr', class_='build-row'):
        build_data = {}
        build_link_element = row.find('a', class_='build-link')
        if build_link_element:
            build_data['build_number'] = build_link_element.text.strip()
        else:
            build_data['build_number'] = 'No Items Received'
        build_status_element = row.find('img', class_='icon-red') or row.find('img', class_='icon-blue')
        if build_status_element:
            build_status = build_status_element['alt']
            build_status = build_status.replace(" > Console Output", "")
            build_data['build_status'] = build_status
            
            if build_status == 'Failed':
                build_data['failure_cause'] = 'Failure Cause'  
        else:
            build_data['build_status'] = 'Aborted'
        build_details_element = row.find('div', class_='pane build-details')
        if build_details_element:
            build_data['build_timestamp'] = build_details_element.text.strip()
        else:
            build_data['build_timestamp'] = 'No Items Received'
        build_description_element = row.find('div', class_='pane desc')
        if build_description_element:
            build_data['build_description'] = build_description_element.text.strip()
        else:
            build_data['build_description'] = 'No Items Received'
        build_link_element = row.find('a', class_='build-status-link')
        if build_link_element:
            build_link = build_link_element['href']
            if not build_link.startswith('http'):
                build_data['build_link'] = f"{jenkins_url_customized}{build_link}"
        else:
            build_data['build_link'] = 'No Items Received'
        build_data['pats_report'] = f"{build_data['build_link'].replace('/console', '/PATSReport')}"
        build_history_data.append(build_data)
    return build_history_data


def extract_build_data_regression():
    response = requests.get(jenkins_url_regression, verify=False, timeout=1)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    build_history_data = []

    for row in soup.find_all('tr', class_='build-row'):
        build_data = {}
        build_link_element = row.find('a', class_='model-link inside build-link display-name')
        if build_link_element:
            build_data['build_number'] = build_link_element.text.strip()
        else:
            build_data['build_number'] = 'No Items Received'
        
        # Extract the build status from the SVG tooltip
        build_status_element = row.find('svg', {'tooltip': True})
        if build_status_element:
            build_status_tooltip = build_status_element['tooltip']
            if 'Failed' in build_status_tooltip:
                build_data['build_status'] = 'Failed'
                build_data['failure_cause'] = 'Failure Cause'
            elif 'Success' in build_status_tooltip:
                build_data['build_status'] = 'Success'
            else:
                build_data['build_status'] = 'Aborted'
        else:
            build_data['build_status'] = 'Aborted'
        build_details_element = row.find('div', class_='pane build-details')
        if build_details_element:
            build_data['build_timestamp'] = build_details_element.text.strip()
        else:
            build_data['build_timestamp'] = 'No Items Received'
        build_number = build_data['build_number'].lstrip('#')
        build_data['build_link'] = jenkins_url_regression + build_number + '/console'
        build_data['pats_report'] = f"{jenkins_url_regression}{build_number}/PATSReport/"
        build_history_data.append(build_data)
    return build_history_data


def extract_build_data_system():
    response = requests.get(jenkins_url_system, verify=False, timeout=1)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    build_history_data = []

    for row in soup.find_all('tr', class_='build-row'):
        build_data = {}
        build_link_element = row.find('a', class_='model-link inside build-link display-name')
        if build_link_element:
            build_data['build_number'] = build_link_element.text.strip()
        else:
            build_data['build_number'] = 'No Items Received'
        
        # Extract the build status from the SVG tooltip
        build_status_element = row.find('svg', {'tooltip': True})
        if build_status_element:
            build_status_tooltip = build_status_element['tooltip']
            if 'Failed' in build_status_tooltip:
                build_data['build_status'] = 'Failed'
                build_data['failure_cause'] = 'Failure Cause'
            elif 'Success' in build_status_tooltip:
                build_data['build_status'] = 'Success'
            else:
                build_data['build_status'] = 'Aborted'
        else:
            build_data['build_status'] = 'Aborted'
        build_details_element = row.find('div', class_='pane build-details')
        if build_details_element:
            build_data['build_timestamp'] = build_details_element.text.strip()
        else:
            build_data['build_timestamp'] = 'No Items Received'
        build_number = build_data['build_number'].lstrip('#')
        build_data['build_link'] = jenkins_url_system + build_number + '/console'
        build_data['pats_report'] = f"{jenkins_url_system}{build_number}/PATS_20Cucumber_20Report/"
        build_history_data.append(build_data)
    return build_history_data


def extract_build_data_deployment():
    response = requests.get(jenkins_url_deployment, verify=False, timeout=1)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    build_history_data = []

    for row in soup.find_all('tr', class_='build-row'):
        build_data = {}
        build_link_element = row.find('a', class_='model-link inside build-link display-name')
        if build_link_element:
            build_data['build_number'] = build_link_element.text.strip()
        else:
            build_data['build_number'] = 'No Items Received'
        
        # Extract the build status from the SVG tooltip
        build_status_element = row.find('svg', {'tooltip': True})
        if build_status_element:
            build_status_tooltip = build_status_element['tooltip']
            if 'Failed' in build_status_tooltip:
                build_data['build_status'] = 'Failed'
            elif 'Success' in build_status_tooltip:
                build_data['build_status'] = 'Success'
            else:
                build_data['build_status'] = 'Aborted'
        else:
            build_data['build_status'] = 'Aborted'
        build_details_element = row.find('div', class_='pane build-details')
        if build_details_element:
            build_data['build_timestamp'] = build_details_element.text.strip()
        else:
            build_data['build_timestamp'] = 'No Items Received'
        build_number = build_data['build_number'].lstrip('#')
        build_data['build_link'] = jenkins_url_deployment + build_number + '/console'
        build_data['pats_report'] = f"{jenkins_url_deployment}{build_number}/PATSReport/"
        build_history_data.append(build_data)
    return build_history_data


try:
    # Collect data for the Functional-Scenarios URL
    build_history_data_functional = extract_build_data_functional()
    if build_history_data_functional:   
        build_history_data_functional.pop()
        json_filename = os.path.join(script_dir, 'build_history.json')
        with open(json_filename, 'w') as json_file:
            json.dump(build_history_data_functional, json_file, indent=4)

        print('Functional-Scenarios build history data saved to build_history.json')
    else:   
        json_filename = os.path.join(script_dir, 'build_history.json')
        with open(json_filename, 'w') as json_file:
            json.dump([{'message': 'No Records Available'}], json_file, indent=4)
        print('No records available. Updated build_history.json with the message.')

    # Collect data for the AMF-SMF-Regression URL
    build_history_data_regression = extract_build_data_regression()
    if build_history_data_regression:   
        json_filename = os.path.join(script_dir, 'regression_report.json')
        with open(json_filename, 'w') as json_file:
            json.dump(build_history_data_regression, json_file, indent=4)

        print('AMF-SMF-Regression build history data saved to regression_report.json')
    else:
        json_filename = os.path.join(script_dir, 'regression_report.json')
        with open(json_filename, 'w') as json_file:
            json.dump([{'message': 'No Records Available'}], json_file, indent=4)
        print('No records available. Updated regression_report.json with the message.')

# Collect data for the System Test BV URL
    build_history_data_system = extract_build_data_system()
    if build_history_data_system:
        json_filename = os.path.join(script_dir, 'system_report.json')
        with open(json_filename, 'w') as json_file:
            json.dump(build_history_data_system, json_file, indent=4)

        print('System BV build history data saved to system_report.json')
    else:
        json_filename = os.path.join(script_dir, 'system_report.json')
        with open(json_filename, 'w') as json_file:
            json.dump([{'message': 'No Records Available'}], json_file, indent=4)
        print('No records available. Updated system_report.json with the message.')

    # Collect data for the Deployment URL
    build_history_data_deployment = extract_build_data_deployment()
    if build_history_data_deployment:
        json_filename = os.path.join(script_dir, 'deployment_report.json')
        with open(json_filename, 'w') as json_file:
            json.dump(build_history_data_deployment, json_file, indent=4)

        print('P5G Deployment build history data saved to deployment_report.json')
    else:
        json_filename = os.path.join(script_dir, 'deployment_report.json')
        with open(json_filename, 'w') as json_file:
            json.dump([{'message': 'No Records Available'}], json_file, indent=4)
        print('No records available. Updated deployment_report.json with the message.')

except requests.exceptions.RequestException as e:
    print(f"An error occurred while accessing the Jenkins URL(s): {e}")
    # Update the JSON files with the error message
    with open('build_history.json', 'w') as json_file:
        json.dump([{'message': 'No Records Available'}], json_file, indent=4)
    with open('regression_report.json', 'w') as json_file:
        json.dump([{'message': 'No Records Available'}], json_file, indent=4)
    with open('deployment_report.json', 'w') as json_file:
        json.dump([{'message': 'No Records Available'}], json_file, indent=4)
    with open('system_report.json', 'w') as json_file:
        json.dump([{'message': 'No Records Available'}], json_file, indent=4)

