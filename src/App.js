import './App.css';
import Layout from "./components/navbar/NavBar";

function App() {
  return (
              <div>

                  <Layout/>
                  <div>
                      <section>
                          <h1 className={"title"}>Professional Self-Assessment</h1>
                          <p>The development of this ePortfolio has given me a valuable opportunity to demonstrate my technical skills gained throughout my time at Southern New Hampshire University. This ePortfolio functions as a comprehensive showcase of my academic achievements, practical projects, and growth in Computer Science.
                          Throughout my time at Southern New Hampshire University I've developed the following:
                          </p>
                          <ul>
                              <li>
                                  Collaboration: In various Computer Science courses and discussions, I was tasked was collaborating with classmates to develop strong solutions.
                              </li>
                              <li>
                                  Communicating with Stakeholders: During my time at Southern New Hampshire University, I've done a lot of side-projects that involving communication between stakeholders.
                              </li>
                              <li>
                                  Data Structures and Algorithms: Optimized algorithms for performance, particularly in search and sorting, improving application efficiency.
                              </li>
                          </ul>
                          <p>The following is a code review of unoptimized code, along with each artifact and their ehancements. </p>
                      </section>
                      <section>
                          <h1 className={"title"}>Code Review</h1>
                          <iframe width="100%" height="400" src="https://www.youtube.com/embed/iZU78vHkHXI" title="2024 11 13 10 43 57" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                      </section>
                      <section className="artifacts-comparison">
                          <h1 className={"title"}>Original and Enhanced Artifacts</h1>
                          <div className="artifact-description">
                              <p>
                                  <strong>Description of the Artifact:</strong>
                              </p>
                              <p>
                                  Frontend service, components. Initially, this was my first enhancement, but I thought
                                  of a better idea instead of implementing Kubernetes. The frontend application is the
                                  most important aspect of a service, the issue is that frontends can easily be filled
                                  with too much information, slowing changes and reducing searchability. I’ve
                                  experienced this issue in my personal development, and as an enhancement, I divided
                                  key aspects of code into their respective components. This artifact showcases features
                                  such as pagination and data handling.
                              </p>
                          </div>
                          <div className="comparison-grid">
                              <div className="original">
                                  <h2>Original Artifact</h2>
                                  <ul>
                                      <li>
                                          <strong>Fetcher:</strong> Individual fetcher logic repeated in every
                                          component.
                                      </li>
                                      <li>
                                          <strong>Product Card:</strong> Redundant card components for different pages.
                                      </li>
                                      <li>
                                          <strong>Product Page:</strong> Mixed violins and violas logic, making updates
                                          tedious.
                                      </li>
                                      <li>
                                          <strong>Interfaces:</strong> Scattered and repetitive, with unnecessary lines
                                          of code.
                                      </li>
                                  </ul>
                              </div>
                              <div className="enhanced">
                                  <h2>Enhanced Artifact</h2>
                                  <ul>
                                      <li>
                                          <strong>Fetcher:</strong> Created a reusable `UseFetcher` component, saving 8
                                          lines per use.
                                      </li>
                                      <li>
                                          <strong>Product Card:</strong> Consolidated into one reusable component,
                                          saving 50 lines.
                                      </li>
                                      <li>
                                          <strong>Product Page:</strong> Abstracted structure into components, saving 34
                                          lines.
                                      </li>
                                      <li>
                                          <strong>Interfaces:</strong> Centralized into `interfaces.tsx`, saving over 75
                                          lines and improving reusability.
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="reflection">
                              <h2>Reflection on the Process</h2>
                              <p>
                                  <strong>Parameters:</strong> Added parameters to components for better modularity.
                                  <strong>Imports:</strong> Updated imports to ensure proper component encapsulation.
                                  <strong>Debugging:</strong> Refactored APIs and adjusted interface mismatches.
                              </p>
                              <p>
                                  This artifact demonstrates adherence to industry standards like the Component Object
                                  Model, promoting readability, modularity, and agility in development. It showcases the
                                  use of Next.js, React, TypeScript, and design principles.
                              </p>
                          </div>
                          <div className="artifact-description">
                              <p>
                                  <strong>Description of the Artifact:</strong>
                              </p>
                              <p>
                                  Backend: Filtering and Pagination. Pagination and filtering are critical features in
                                  modern applications, ensuring that data remains accessible even when dealing with
                                  large datasets. This artifact focuses on adding pagination and filtering to a backend
                                  service using NestJS. Pagination is achieved by returning data along with pagination
                                  parameters and a total count, while filters are applied through URL queries, enhancing
                                  data searchability and navigation.
                              </p>
                          </div>
                          <div className="comparison-grid">
                              <div className="original">
                                  <h2>Original Artifact</h2>
                                  <ul>
                                      <li>
                                          <strong>Pagination:</strong> No pagination implemented, all data loaded at
                                          once.
                                      </li>
                                      <li>
                                          <strong>Filtering:</strong> Filters were not applied dynamically; search was
                                          not integrated.
                                      </li>
                                      <li>
                                          <strong>Data Fetching:</strong> Single query for all data, leading to
                                          performance issues with larger datasets.
                                      </li>
                                      <li>
                                          <strong>Controller:</strong> No pagination logic in the controller, making it
                                          less efficient.
                                      </li>
                                  </ul>
                              </div>
                              <div className="enhanced">
                                  <h2>Enhanced Artifact</h2>
                                  <ul>
                                      <li>
                                          <strong>Pagination:</strong> Added pagination with query parameters such as
                                          `page` and `perPage`, allowing data to be fetched in chunks.
                                      </li>
                                      <li>
                                          <strong>Filtering:</strong> Implemented dynamic filtering with SQL queries to
                                          allow search functionality based on input fields.
                                      </li>
                                      <li>
                                          <strong>Data Fetching:</strong> Introduced pagination parameters in the
                                          backend response, optimizing performance by limiting data loaded at once.
                                      </li>
                                      <li>
                                          <strong>Controller:</strong> Refactored the product controller to handle
                                          pagination and filter parameters efficiently.
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="reflection">
                              <h2>Reflection on the Process</h2>
                              <p>
                                  <strong>Parameters:</strong> Added pagination parameters such as `page`, `perPage`,
                                  and `sort` to the service to improve data fetching
                                  efficiency. <strong>Refactoring:</strong> Refactored the product controller to
                                  integrate pagination and filtering logic. <strong>Debugging:</strong> Worked on
                                  optimizing the SQL query logic for filtering to handle wildcards and improve search
                                  accuracy.
                              </p>
                              <p>
                                  This artifact demonstrates a clear understanding of backend development, showcasing
                                  the implementation of pagination and filtering in a NestJS application. By adopting
                                  industry-standard practices for data handling, this solution provides scalability and
                                  efficiency for handling large datasets. The experience of adding these features has
                                  deepened my understanding of both backend and database performance optimization.
                              </p>
                          </div>
                          <div className="artifact-description">
                              <p>
                                  <strong>Description of the Artifact:</strong>
                              </p>
                              <p>
                                  Backend/Admin/Frontend: Violins and User Authentication. This artifact focuses on
                                  implementing user authentication and roles management within a backend application.
                                  Securing routes is essential to ensure that only authorized users can access or modify
                                  specific data. In addition, a "Viola" table was introduced to simplify data
                                  management, and user roles were implemented to restrict access based on privileges.
                                  The goal is to provide secure and role-based access control for backend operations and
                                  frontend interactions.
                              </p>
                          </div>
                          <div className="comparison-grid">
                              <div className="original">
                                  <h2>Original Artifact</h2>
                                  <ul>
                                      <li>
                                          <strong>Roles:</strong> No user roles or authentication system.
                                      </li>
                                      <li>
                                          <strong>CRUD Operations:</strong> Open routes, allowing anyone to perform CRUD
                                          operations on any data.
                                      </li>
                                      <li>
                                          <strong>Security:</strong> No security or guard mechanism for protected
                                          routes.
                                      </li>
                                      <li>
                                          <strong>Tables:</strong> Single "Products" table, without category-specific
                                          distinction between violins and violas.
                                      </li>
                                  </ul>
                              </div>
                              <div className="enhanced">
                                  <h2>Enhanced Artifact</h2>
                                  <ul>
                                      <li>
                                          <strong>Roles:</strong> Implemented user roles with authentication system,
                                          allowing specific users to access certain routes.
                                      </li>
                                      <li>
                                          <strong>CRUD Operations:</strong> Secured CRUD routes using role-based access,
                                          ensuring only authorized users can modify data.
                                      </li>
                                      <li>
                                          <strong>Security:</strong> Added JWT-based authentication and an auth guard to
                                          protect routes based on user roles.
                                      </li>
                                      <li>
                                          <strong>Tables:</strong> Created separate "Viola" and "Violin" tables,
                                          categorized products, and improved data management.
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="reflection">
                              <h2>Reflection on the Process</h2>
                              <p>
                                  <strong>Authentication:</strong> Implemented a JWT-based authentication system to
                                  securely manage user access. <strong>Roles:</strong> Introduced role-based access
                                  control to restrict routes based on user roles, ensuring only authorized users can
                                  perform specific actions. <strong>Guard Implementation:</strong> Faced challenges in
                                  implementing the roles guard, which required handling roles as a string rather than an
                                  array.
                              </p>
                              <p>
                                  This artifact demonstrates a deep understanding of backend security practices,
                                  particularly the importance of user authentication and role-based access control. By
                                  separating the "Violin" and "Viola" tables and ensuring secure data handling with JWT
                                  tokens and guards, the solution adheres to industry standards for securing
                                  applications. The experience gained from overcoming challenges related to roles and
                                  authentication will help in future projects requiring secure and scalable backend
                                  systems.
                              </p>
                          </div>
                      </section>

                  </div>
              </div>
  );
}

export default App;
