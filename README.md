# Protocol Buffers

Protocol Buffers (Protobuf) is a method of serializing structured data useful for transmitting data over the wire or storing it.

In the project directory, you can run:

### `npm install`

Then run the index.js file where it will create a file jsonData.json and check the size of this file

### `node index.js`

<p align="center">
<img  src="images/protobuf1.jpg" width="80%">
</p>

Then run the index2.js file where it will create a file protoData and check the size of this file

### `node index2.js`

<p align="center">
<img  src="images/protobuf2.png" width="80%">
</p>

Now check the differences between the size of generated files in both the cases.

<p align="center">
<img  src="images/protobuf3.png" width="80%">
</p>

So, protobuf is more than half less size of json data. It will be easy to send it in request and also schema you can define plus it is language neutral so once you define proto file it can be output into in any language you want to use.