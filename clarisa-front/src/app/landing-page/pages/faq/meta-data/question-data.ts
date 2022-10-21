export const questionData = [
  {
    id: 1,
    nameSection: 'Access',
    questions: [
      {
        id: 1,
        nameQuestion:
          "01. How do I access CLARISA's Application Programming Interfaces (APIs)?",
        answer:
          "CLARISA information is publicly available on the web portal https://clarisa.cgiar.org. Users can also retrieve this information through Application Programming Interfaces (APIs). Access to CLARISA's API is free of charge. To connect using your application, please consult the endpoint locations under the API documentation 'Services' menu at the top of this page. API access requires a valid username and password combination available upon request. Users can submit their requests by sending an email to ClarisaSupport@cgiar.org. ",
      },
      {
        id: 2,
        nameQuestion:
          "02. Where is the CLARISA's Application Programming Interfaces (APIs) documentation?  ",
        answer:
          "The documentation on CLARISA's Application Programming Interfaces (APIs) is available on the 'Services' menu at the top of this page. This section provides a description to guide both technical and non-technical users. ",
      },
      {
        id: 3,
        nameQuestion:
          "03. How do I get CLARISA's Application Programming Interfaces (APIs) credentials?",
        answer:
          "Users can submit their requests to access CLARISA's Application Programming Interfaces (APIs) via email (ClarisaSupport@cgiar.org). In the email, users should mention the lists they are interested in, explain the request, and specify how often they anticipate consuming the APIs. These details requested are purely for resource planning.  ",
      },
    ],
  },
  {
    id: 2,
    nameSection: 'Technology',
    questions: [
      {
        id: 4,
        nameQuestion:
          "01. Is there an alternative technology (e.g., SOAP/XML) to access CLARISA's data? ",
        answer: 'No, CLARISA only works using JSON/REST technology. ',
      },
    ],
  },
  {
    id: 3,
    nameSection: 'Data',
    questions: [
      {
        id: 5,
        nameQuestion: '01. How often is the data updated?  ',
        answer:
          'Each dataset is updated at a different frequency and as soon as it becomes available, ranging from a daily to an annual basis.',
      },
      {
        id: 6,
        nameQuestion:
          "02. How do I upload my data onto CLARISA's Application Programming Interfaces (APIs)?  ",
        answer:
          "CLARISA's Application Programming Interfaces (APIs) are not open to updates from the public. However, collaborations may be considered based on the data users' interest to contribute and on the possible implications for maintenance. Please get in touch with the CLARISA team by sending an email to  ClarisaSupport@cgiar.org.  ",
      },
      {
        id: 7,
        nameQuestion:
          '03. Can I be notified whenever there is a data update in CLARISA?',
        answer:
          'At the moment, only updates of a critical nature may be alerted via email. To be notified of such updates, please register using the form. ',
      },
      {
        id: 8,
        nameQuestion:
          "04. Is it possible to download CLARISA's control lists? ",
        answer:
          "Yes. Users can freely download CLARISA's control lists by accessing the 'Services' section on the top right of the page. Each list can be downloaded separately and is available in DOC and PDF formats.",
      },
    ],
  },
];
