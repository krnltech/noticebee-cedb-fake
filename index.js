const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connection.on("connection", () => {
  console.log("db is running");
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});

app.use("/", async (req, res) => {
  try {
    // const { orgId, boardId } = req.params;
    const board = {
      splitNoticeSets: [
        {
          interval: 20,
          materials: [
            {
              muted: true,
              _id: "617a3e6bf9abbb9b8692b518",
              adminid: "606afd5b1af8fee9f598f21b",
              name: "Video for cedp ",
              materialtype: "Video",
              material:
                "https://kernel.ap-south-1.linodeobjects.com/kernel/noticebee/KernelTechnologies606afbd51af8fee9f598f219/materials/Fileh7opgmdkg8o.mp4",
              __v: 0,
            },
          ],
          _id: "617a3ef8f9abbb9b8692b519",
          name: "CEDP",
          viewtype: "singlecontent",
          organization: "606afbd51af8fee9f598f219",
          __v: 0,
        },
        {
          interval: 10,
          materials: [
            {
              muted: true,
              _id: "617a3d42f9abbb9b8692b515",
              adminid: "606afd5b1af8fee9f598f21b",
              name: "Text for cedp",
              materialtype: "Text",
              material:
                '<h1>Hello</h1>\n<p>This is a text <strong>notice</strong>. Very nice notice.</p>\n<table style="width: 100%;">\n    <tbody>\n        <tr>\n            <td style="width: 33.3333%;">one</td>\n            <td style="width: 33.3333%;">two</td>\n            <td style="width: 33.3333%;">three</td>\n        </tr>\n        <tr>\n            <td style="width: 33.3333%;">four</td>\n            <td style="width: 33.3333%;">five</td>\n            <td style="width: 33.3333%;">six</td>\n        </tr>\n        <tr>\n            <td style="width: 33.3333%;">seven</td>\n            <td style="width: 33.3333%;">eight</td>\n            <td style="width: 33.3333%;">nine</td>\n        </tr>\n    </tbody>\n</table>\n',
              __v: 0,
            },
            {
              muted: true,
              _id: "617a3d5cf9abbb9b8692b516",
              adminid: "606afd5b1af8fee9f598f21b",
              name: "Image for cedp",
              materialtype: "Image",
              material:
                "https://kernel.ap-south-1.linodeobjects.com/kernel/noticebee/KernelTechnologies606afbd51af8fee9f598f219/materials/Filevnv5aq5ff7.png",
              __v: 0,
            },
            {
              muted: true,
              _id: "617a3d74f9abbb9b8692b517",
              adminid: "606afd5b1af8fee9f598f21b",
              name: "Image for cedp 2",
              materialtype: "Image",
              material:
                "https://kernel.ap-south-1.linodeobjects.com/kernel/noticebee/KernelTechnologies606afbd51af8fee9f598f219/materials/Filen9u9q4cvbdm.jpg",
              __v: 0,
            },
          ],
          _id: "617a3f17f9abbb9b8692b51a",
          name: "CEDP carousel",
          viewtype: "imagetextslider",
          organization: "606afbd51af8fee9f598f219",
          __v: 0,
        },
      ],
      _id: "60d71d69f01920b7adc2ff17",
      isSplit: false,
      name: "Kernel board 02",
      __v: 0,
      organization: {
        header: {
          background: "#e3e3e3",
          color: "#000000",
        },
        headline: {
          background: "#ff2e2e",
          color: "#ffffff",
        },
        headlineTwo: {
          background: "#1a5fb4",
          color: "#f6f5f4",
        },
        logo: "https://kernel.ap-south-1.linodeobjects.com/Fileuu0twm6p7pl.png",
        extra:
          "https://kernel.ap-south-1.linodeobjects.com/Filei59xdkz5fwn.png",
        _id: "606afbd51af8fee9f598f219",
        name: "Kernel Technologies",
      },
      splitType: "twosplit",
      headline:
        "অর্থহীনতা আর অর্থদ্যোতনার সেই ঈর্ষাকাতর মোহাবিষ্টতা তাই তৈরি করে নাও নিজের মাঝে- চাই একটুখানি ঔৎসুক্য। নিজেই ঠিক করো, নিজের ভাষাটা কি অর্থহীন, নাকি কিছু সত্যিই বলছে!",
      headlineTwo:
        "অর্থহীন লেখা যার মাঝে আছে অনেক কিছু। হ্যাঁ, এই লেখার মাঝেই আছে অনেক কিছু। যদি তুমি মনে করো, এটা তোমার কাজে লাগবে, তাহলে তা লাগবে কাজে। নিজের ভাষায় লেখা দেখতে অভ্যস্ত হও। মনে রাখবে লেখা অর্থহীন হয়, যখন তুমি তাকে অর্থহীন মনে করো; আর লেখা অর্থবোধকতা তৈরি করে, যখন তুমি তাতে অর্থ ঢালো। যেকোনো লেখাই তোমার কাছে অর্থবোধকতা তৈরি করতে পারে, যদি তুমি সেখানে অর্থদ্যোতনা দেখতে পাও। …ছিদ্রান্বেষণ? না, তা হবে কেন?",
    };
    console.log(board);
    res.status(200).json({ board });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.listen(8080, async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://njay:2828@njay.iy3to.mongodb.net/noticebee?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.log(error.message);
  }
  console.log(8080);
});
