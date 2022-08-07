FROM python:alpine3.7
COPY . /Hexagon
WORKDIR Hexagon
RUN pip install -r requirements.txt
ENTRYPOINT [ "python" ]
CMD [ "app.py" ]
