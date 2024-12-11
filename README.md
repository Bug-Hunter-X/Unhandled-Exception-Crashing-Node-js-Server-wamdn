# Unhandled Exception Crashing Node.js Server

This repository demonstrates a common but easily overlooked error in Node.js applications: crashing due to unhandled exceptions.  The `serverBug.js` file shows a server vulnerable to crashing if the incoming request body is not valid JSON. The `serverSolution.js` file provides a corrected version with proper error handling.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node serverBug.js`.
4. Send a request to the server with an invalid JSON body (e.g., using curl or Postman).
5. Observe that the server crashes.
6. Run `node serverSolution.js` to see the corrected, more robust version. 

## Problem and Solution
The bug is in the lack of error handling during JSON parsing. If `JSON.parse()` encounters an error (e.g., due to malformed JSON), it throws an exception. Without a `try...catch` block, this exception is unhandled, leading to the server's termination.
The solution involves wrapping the `JSON.parse()` call in a `try...catch` block to gracefully handle parsing errors. This prevents the server from crashing and allows for better error reporting or recovery mechanisms.