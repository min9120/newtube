const fakeUser = {
  name: "gyeongmin",
  loggedIn: true,
};
const fakeVideos = [
  { title: "첫번째 비디오", rating: 3, comment: "so good", views: 0, id: 1 },
  { title: "두번째 비디오", rating: 3, comment: "so good", views: 1, id: 2 },
  { title: "이건 세번째", rating: 3, comment: "so good", views: 342, id: 3 },
  { title: "네번째 비디오", rating: 3, comment: "so good", views: 342, id: 4 },
  {
    title: "다섯번째 비디오",
    rating: 3,
    comment: "so good",
    views: 342,
    id: 5,
  },
  {
    title: "내가 배고픔을 표현하는 비디오",
    rating: 3,
    comment: "so good",
    views: 342,
    id: 6,
  },
  { title: "34234", rating: 3, comment: "so good", views: 342, id: 7 },
  { title: "3214424241", rating: 3, comment: "so good", views: 342, id: 8 },
  { title: "f4f4", rating: 3, comment: "so good", views: 342, id: 9 },
];

const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser, fakeVideos });
const watch = (req, res) => {
  const { id } = req.params; // ===const id = req.params.id
  const video = fakeVideos[id - 1];

  return res.render("watch", { pageTitle: "Watch", video });
};
const getEdit = (req, res) => {
  const { id } = req.params; // ===const id = req.params.id
  const video = fakeVideos[id - 1];
  return res.render("edit", { pageTitle: `editing ${video.title}`, video });
};
const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  fakeVideos[id - 1].title = title;
  console.log(title);
  return res.redirect(`/videos/${id}`);
};

//===================================================================//
const search = (req, res) => res.send("search video");
const remove = (req, res) => res.send("remove video");
const upload = (req, res) => res.send("upload video");

export { trending, watch, getEdit, search, remove, upload, postEdit };
