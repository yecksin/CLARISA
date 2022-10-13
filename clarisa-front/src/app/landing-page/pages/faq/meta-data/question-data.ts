export const questionData = [
  {
    id: 1,
    nameSection: 'Access',
    questions: [
      {
        id: 1,
        nameQuestion: 'How do I access the API?',
        answer:
          'CLARISA information is available to the public through our web portal https://clarisa.cgiar.org. It is also available to the public via API. However, to connect using your own application (through API), the endpoint locations are as per the API documentation under the “Services” menu at the top of this page. API access requires a valid username/password combination which is available upon request. Requests are to be submitted via email to planningandreporting@cgiar.org.',
      },
      {
        id: 2,
        nameQuestion: 'Where is the API documentation?',
        answer:
          'The documentation on API access is tailored for both technical and non-technical users. It is divided into two main sections and is located under the “Services” menu at the top of this page.',
      },
      {
        id: 3,
        nameQuestion: 'How do I get API credentials?',
        answer:
          'Getting credentials to access the API is freely available upon request. Requests are to be submitted via email. In your request, kindly mention the lists you are interested in, why and how often you anticipate calling the APIs. The details requested are purely for resource planning.',
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
          'Is there an alternative technology eg SOAP/XML to access the data?',
        answer: 'No, CLARISA only works as using JSON/REST technology.',
      },
    ],
  },
  {
    id: 3,
    nameSection: 'Data',
    questions: [
      {
        id: 5,
        nameQuestion: 'How often is the data updated?',
        answer:
          'Each data set is updated at a different frequency as it becomes available. This ranges from as long as annually to some as often as daily.',
      },
      {
        id: 6,
        nameQuestion: 'How do I upload my data onto this API?',
        answer:
          'This API is not open to the public for updating. However, this can be discussed based on the data you have and its implication on maintenance. Please get in touch with us on planningandreporting@cgiar.org for further discussion.',
      },
      {
        id: 7,
        nameQuestion: 'Can I be notified whenever there is an update of data?',
        answer:
          'At the moment only updates of a critical nature may be alerted via email.',
      },
    ],
  },
];
