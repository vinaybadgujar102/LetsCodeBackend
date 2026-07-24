export const PYTHON_IMAGE = "python:3.8-slim";
export const JAVA_IMAGE = "eclipse-temurin:21-jdk-alpine";
export const CPP_IMAGE = "frolvlad/alpine-gxx";

export const submission_queue = "SubmissionQueue";
// this will represent header size of docker stream
// docker stream header will contain data about type of stream i.e. stdout or stderr
// and the length of the stream
export const DOCKER_STREAM_HEADER_SIZE = 8;
