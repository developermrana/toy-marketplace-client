/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
  return (
    <div>
      <p className="text-center text-[#405a7f] text-3xl font-bold py-10">
        Question and Answer
      </p>
      <div className="Container">
        <div className="mb-7">
          <h2 className="text-xl">
            1. Qus : What is an access token and refresh token? How do they work
            and where should we store them on the client-side?
          </h2>
          <p>
            Ans : Access Token: An access token is a credential that represents
            the authorization to access specific resources or perform certain
            actions on behalf of a user. Refresh Token: A refresh token is a
            long-lived credential that is used to obtain a new access token when
            the current one expires. Access tokens should be stored securely,
            typically in memory or a short-lived storage mechanism like a
            browser session or local storage. Refresh tokens require stronger
            protection due to their long lifespan and ability to generate new
            access tokens. They should be securely stored, such as in an
            encrypted HTTP-only cookie or a secure storage mechanism provided by
            the platform (e.g., Keychain on iOS, Keystore on Android). This
            helps prevent theft or misuse of refresh tokens.
          </p>
        </div>
        <div className="mb-7">
          <h2 className="text-xl">2. Qus : Compare SQL and NoSQL databases?</h2>
          <p>
            Ans : SQL and NoSQL databases are two distinct approaches to storing
            and managing data. SQL databases follow a structured, tabular data
            model with predefined schemas and relationships between tables. They
            excel in applications that require strict data consistency, complex
            querying, and well-defined schemas. On the other hand, NoSQL
            databases offer flexible data models, allowing for schema-less
            designs and accommodating unstructured or semi-structured data. They
            are designed to handle large-scale data, provide high scalability
            through horizontal scaling, and are well-suited for scenarios with
            evolving data structures and high-speed data ingestion. The choice
            between SQL and NoSQL depends on the specific needs of an
            application, including data structure, scalability requirements,
            querying complexity, and consistency considerations.
          </p>
        </div>
        <div className="mb-7">
          <h2 className="text-xl">
            3. Qus : What is express js? What is Nest JS ?
          </h2>
          <p>
            Ans : Express is a minimal and flexible Node.js web application
            framework that provides a robust set of features for web and mobile
            applications. <br />
            NestJS is a popular open-source, back-end framework for Node. js and
            TypeScript-based, server-side applications.
          </p>
        </div>
        <div className="mb-7">
          <h2 className="text-xl">
            4. Qus : What is MongoDB aggregate and how does it work ?
          </h2>
          <p>
            Ans : MongoDB's aggregation framework is a powerful tool for
            performing data processing and analysis tasks on collections of
            documents within a MongoDB database. It allows you to perform
            complex data transformations, aggregations, and computations on
            large volumes of data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
