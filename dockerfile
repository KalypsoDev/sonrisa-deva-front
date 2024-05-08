# Use an official Node base image
FROM node:20

# Install Apache
RUN apt-get update && apt-get install -y apache2

# Copy the application files to the container
COPY ./ /app

# Set the working directory to /app
WORKDIR /app

# Install dependencies and build your app
RUN npm ci
RUN npm run build

# Remove the default Apache web root directory and copy built files from /app/dist
RUN rm -r /var/www/html
RUN cp -r /app/dist /var/www/html

RUN cp -r /app/node_modules /var/www/html


# Set environment variables for Apache to run properly
ENV APACHE_RUN_DIR=/var/run/apache2 \
    APACHE_PID_FILE=/var/run/apache2/apache2.pid \
    APACHE_LOCK_DIR=/var/lock/apache2 \
    APACHE_LOG_DIR=/var/log/apache2 \
    APACHE_RUN_USER=www-data \
    APACHE_RUN_GROUP=www-data

# Expose port 80 for the Apache server
EXPOSE 80

# Configure Apache to run in the foreground
CMD ["apache2ctl", "-D", "FOREGROUND"]
