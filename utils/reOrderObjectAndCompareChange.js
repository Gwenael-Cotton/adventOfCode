const oldData = [
  {
    id: 8,
    project_name: "TEST Project history",
    createdAt: "2022-12-15T09:26:42.885Z",
    updatedAt: "2022-12-15T09:26:42.885Z",
    project_id: 12,
    published_date: "2022-12-14T17:12:19.679Z",
    action: "Create new project",
    author: "vu fred",
    content: {
      id: 12,
      code: null,
      logo: null,
      name: "TEST Project history",
      tags: [],
      links: [],
      users: [],
      banner: null,
      status: true,
      company: null,
      velocity: [],
      createdAt: "2022-12-14T17:12:19.679Z",
      feedbacks: [],
      updatedAt: "2022-12-15T09:26:42.814Z",
      start_date: null,
      description: "Super",
      publishedAt: null,
      consumed_budget: [],
      original_budget: null,
      velocity_precision: 0,
    },
    modified_by: "vu fred",
    modified_date: "2022-12-15T09:26:42.814Z",
  },
];

const result = {
  id: 12,
  name: "TEST Project history",
  description: "Super TEST",
  start_date: null,
  status: true,
  code: null,
  velocity_precision: 1,
  createdAt: "2022-12-14T17:12:19.679Z",
  updatedAt: "2022-12-15T09:48:12.754Z",
  publishedAt: null,
  users: [],
  company: null,
  logo: null,
  banner: null,
  tags: [],
  original_budget: null,
  consumed_budget: [],
  velocity: [],
  feedbacks: [],
  links: [],
};

function reOrderObject(obj) {
  const content = JSON.parse(JSON.stringify(obj));
  const ordered = Object.keys(content)
    .sort()
    .reduce((obj, key) => {
      obj[key] = content[key];
      return obj;
    }, {});
  return ordered;
}

const newDataParse = reOrderObject(result);
const oldDataParse = reOrderObject(oldData[0].content);

const data = {};
function compareData(oldData, newData) {
  for (const key in newData) {
    if (JSON.stringify(oldData[key]) !== JSON.stringify(newData[key]))
      data[key] = key;
  }
}

compareData(oldDataParse, newDataParse);

console.log(data);
