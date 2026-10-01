#Base image for this project

FROM python:3.14-slim

#Set the working directory inside the container

WORKDIR /app

# Copy the dependencies

COPY requirements.txt .

# Install the dependencies

RUN pip install --no-cache-dir -r requirements.txt 

# Copy the rest of the code

COPY . .

# Expose the port

EXPOSE 80

# Run the application

CMD ["python", "run.py"]

