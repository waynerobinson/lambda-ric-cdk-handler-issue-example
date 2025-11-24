FROM amazonlinux:latest

# Define custom function directory
ARG FUNCTION_DIR="/function"

# Install ruby
RUN dnf install -y ruby3.2 make

# Install bundler
RUN gem install bundler

# Install the Runtime Interface Client
RUN gem install aws_lambda_ric

# Copy function code
RUN mkdir -p ${FUNCTION_DIR}
COPY app.rb ${FUNCTION_DIR}

WORKDIR ${FUNCTION_DIR}

# Set the handler via environment variable
ENV _HANDLER="app.App::Handler.process"

ENTRYPOINT ["/usr/local/bin/aws_lambda_ric"]