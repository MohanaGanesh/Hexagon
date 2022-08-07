FROM python:alpine3.7
COPY . /Hexagon
WORKDIR Hexagon
RUN pip install -r requirements.txt
EXPOSE 9999
ENTRYPOINT [ "python" ]
CMD [ "app.py" ]
