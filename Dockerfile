# Use an official Node runtime as a parent image
FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./frontend/
RUN cd frontend && npm install

RUN npm install express cors


# Install Python and its dependencies
RUN apt-get update && apt-get install -y python3 python3-pip
RUN apt-get update && apt-get install -y python3-venv
RUN python3 -m venv /venv
ENV PATH="/venv/bin:$PATH"

# Install Python packages in the virtual environment
COPY ./requirements.txt /python/requirements.txt
RUN pip3 install --no-cache-dir -r /python/requirements.txt


COPY ./src/server/get_build_history.py ./python/
COPY . .

#EXPOSE 3001

CMD ["npx", "npm-run-all", "start:react", "start:express"]
