<center>
     <h2>Software Engineer Challenge - Front-End</h2>
</center>

**Assignment:**

Design and implement a customer management system for the Fancy Broker Agency.

1.  Rules:

- You have four (4) hours to complete the tasks. Be careful with your time, and make sure that you understand the requirements correctly.
- Try not to over-optimize. An MVP with good documentation counts more than a single polished component.

2.  User stories:

- The broker Tom, would like to see a list of his customers.
- The broker Tom, should be able to search in customer data.
- The broker Tom, should be able to see basic statistics over his data.

3.  Specifications:

- The front page should have this structure:

```
[ Home | Contacts | Search | Help ]

[ Content ]

[ Footer ]
```

- **Home** should render some statistical information about the customers:

  1.  customer count,
  2.  average age,
  3.  [Standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) of the amount they owe to the Fancy Broker Agency, and
  4.  Google Maps with the locations of contacts.

- **Contact** section should render a view with ten (10) customers per page, and users are able to paginate trough the data.

- **Search** Search section should be capable of a full text search through the data and display the results.

Demo data can be found in `data.json`

4.  Deliverables:

- You can use any language/technology/framework of your choice, but we will ask for the rationale of your decision. Since we are using React with TypeScript, a React/TypeScript app would be a plus!
- The solution should include a comprehensive documentation on how to run the app. Keep it simple!
- You can provide a Github link to the solution or send us a tar ball with the source code.

5.  Bonus Points when:

- dockerizing your application,
- writing tests for the critical parts of the app, and
- what are the critical structures of the application? What are the possible bottlenecks? What you would do if you had more time? We are curious of your thoughts.

_The Bonus points don’t have to be delivered on time — you can submit them later._

We are looking forward to seeing your result. Have fun with this task and good luck!
