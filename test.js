const oldData = [
  {
    id: 9,
    project_name: "TEST Project history",
    createdAt: "2022-12-15T13:37:04.009Z",
    updatedAt: "2022-12-15T13:37:04.009Z",
    project_id: 12,
    published_date: "2022-12-14T17:12:19.679Z",
    action: "update",
    author: "vu fred",
    content: {
      id: 12,
      code: null,
      logo: null,
      name: "TEST Project history",
      tags: [],
      links: [Array],
      users: [],
      banner: null,
      status: true,
      company: null,
      velocity: [Array],
      createdAt: "2022-12-14T17:12:19.679Z",
      feedbacks: [],
      updatedAt: "2022-12-15T13:37:03.901Z",
      start_date: null,
      description: "Remplissage changement de",
      publishedAt: null,
      consumed_budget: [Array],
      original_budget: [Object],
      velocity_precision: 0,
    },
    modified_by: "vu fred",
    modified_date: "2022-12-15T13:37:03.901Z",
  },
];
const result = {
  id: 12,
  name: "TEST Project history",
  description: "Remplissage changement de",
  start_date: null,
  status: true,
  code: null,
  velocity_precision: 0,
  createdAt: "2022-12-14T17:12:19.679Z",
  updatedAt: "2022-12-15T13:38:18.347Z",
  publishedAt: null,
  users: [],
  company: null,
  logo: null,
  banner: null,
  tags: [],
  original_budget: {
    id: 9,
    budget: 100000,
    date_start: "2022-12-15",
    date_end: "2023-12-15",
  },
  consumed_budget: [
    {
      id: 10,
      budget: 1000,
      date_start: "2022-12-15",
      date_end: "2022-12-16",
    },
    {
      id: 11,
      budget: 1500,
      date_start: "2022-12-18",
      date_end: "2022-12-19",
    },
  ],
  velocity: [
    {
      id: 3,
      label: "Label velocity 1",
      date_start: "2022-12-15",
      date_end: "2022-12-16",
      day_of_dev: 1,
      point_done: 1,
    },
  ],
  feedbacks: [],
  links: [
    {
      id: 11,
      title: "OWASP top 10 2021",
      url: "https://www.youtube.com/watch?v=xe9LN2w7hfE",
    },
    {
      id: 12,
      title: "Recherche de chemin",
      url: "https://fr.wikipedia.org/wiki/Recherche_de_chemin",
    },
  ],
  createdBy: {
    id: 1,
    firstname: "vu",
    lastname: "fred",
    username: null,
    email: "vu.f@sfeir.com",
    password: "$2a$10$vxfiJLZpmNSH20w8QQZpvegSokTLDWyHBSCiCYz31hyD.Q07Wq79u",
    resetPasswordToken: null,
    registrationToken: null,
    isActive: true,
    blocked: false,
    preferedLanguage: null,
    createdAt: "2022-11-21T16:08:36.701Z",
    updatedAt: "2022-11-21T16:08:36.701Z",
  },
  updatedBy: {
    id: 1,
    firstname: "vu",
    lastname: "fred",
    username: null,
    email: "vu.f@sfeir.com",
    password: "$2a$10$vxfiJLZpmNSH20w8QQZpvegSokTLDWyHBSCiCYz31hyD.Q07Wq79u",
    resetPasswordToken: null,
    registrationToken: null,
    isActive: true,
    blocked: false,
    preferedLanguage: null,
    createdAt: "2022-11-21T16:08:36.701Z",
    updatedAt: "2022-11-21T16:08:36.701Z",
  },
};

function createData(result, action) {
  const content = JSON.parse(JSON.stringify(result));
  delete content.createdBy;
  delete content.updatedBy;
  const data = {
    project_name: result.name,
    project_id: result.id,
    published_date: result.createdAt,
    modified_date: result.updatedAt,
    action,
    author: `${result.createdBy.firstname} ${result.createdBy.lastname}`,
    content,
    modified_by: `${result.updatedBy.firstname} ${result.updatedBy.lastname}`,
  };
  return data;
}

const dataOfResult = createData(result, "update");

function compareObject(oldData, data) {
  const changes = {
    modified_by: data.modified_by,
    action: data.action,
  };
  for (const keys in oldData[0].content) {
    if (keys === "id" || keys === "createdAt") continue;
    const dataContent = data.content[keys];
    const oldContent = oldData[0].content[keys];

    if (typeof dataContent === "object" && dataContent === null) {
      console.log("Obj :", dataContent);
      continue;
    }
    if (dataContent !== oldContent) changes[keys] = dataContent;
  }
  // console.log("Changes", changes);
  return changes;
}

compareObject(oldData, createData(result, "update"));
