FROM node:20.11.1-alpine3.19

#ENV NEXT_PUBLIC_API_IP http://localhost:8000

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY package.json package-lock.json ./

# Install any dependencies specified in requirements.txt
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

RUN npm run build

# Run the Django development server
CMD ["npm", "start"]