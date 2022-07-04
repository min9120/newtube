const fakeUser = {
  name: "gyeongmin",
  loggedIn: true,
};
const fakeVideos = [
  { title: "1", rating: 3, comment: "so good", views: 342, id: 1 },
  { title: "2", rating: 3, comment: "so good", views: 342, id: 2 },
  { title: "3", rating: 3, comment: "so good", views: 342, id: 3 },
  { title: "4", rating: 3, comment: "so good", views: 342, id: 4 },
  { title: "5", rating: 3, comment: "so good", views: 342, id: 5 },
  { title: "64", rating: 3, comment: "so good", views: 342, id: 6 },
  { title: "34234", rating: 3, comment: "so good", views: 342, id: 7 },
  { title: "3214424241", rating: 3, comment: "so good", views: 342, id: 8 },
  { title: "f4f4", rating: 3, comment: "so good", views: 342, id: 9 },
];

const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser, fakeVideos });
const watch = (req, res) => {
  const { id } = req.params; // ===const id = req.params.id
  const video = fakeVideos[id - 1];
  console.log("show video" + id);
  return res.render("watch", { pageTitle: "Watch", video });
};
const edit = (req, res) => res.send("edit video");
const search = (req, res) => res.send("search video");
const remove = (req, res) => res.send("remove video");
const upload = (req, res) => res.send("upload video");

export { trending, watch, edit, search, remove, upload };
