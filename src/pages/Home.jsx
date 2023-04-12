import React, { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import banner from "../Images/19.jpg";
import Image2 from "../Images/2.jpg";
import Image3 from "../Images/3.jpg";
import Image4 from "../Images/7.jpg";
// import Image2 from "../Images/2.jpg";
// import Image2 from "../Images/2.jpg";
// import Image2 from "../Images/2.jpg";
import avatar1 from "../avatars/1.jpg";
import avatar2 from "../avatars/2.jpg";

function Home() {
  const sectionRef = useRef(null);
  const handleScroll = (event) => {
    const section = sectionRef.current;
    const delta = Math.max(-1, Math.min(1, event.deltaY)) * 100; // normalize delta value
    section.scrollLeft -= delta; // scroll horizontally based on delta value
  };
  const HotCollectionCards = Array.from({ length: 25 }, (_, i) => (
    <HotCollectionCard key={i} />
  ));
  return (
    <Box>
      <Grid container spacing={2} sx={{ padding: "30px" }}>
        <Grid xs={9}>
          <Box>
            <img
              src={banner}
              style={{ width: "100%", height: "300px", borderRadius: "10px" }}
            />
          </Box>
          <Box
            display={"flex"}
            padding={"5px"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5">Hot Collections</Typography>
            <Typography variant="body2" color={"gray"}>
              View All
            </Typography>
          </Box>
          <Box
            ref={sectionRef}
            onWheel={handleScroll}
            display={"flex"}
            style={{ whiteSpace: "nowrap", overflowX: "auto" }}
          >
            {HotCollectionCards}
          </Box>

          <HotBids />
        </Grid>
        <Grid xs={3}>
          <Grid container spacing={2} sx={{ padding: "30px 20px" }}>
            <Grid xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={avatar1}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                }}
              />
              <Box sx={{ padding: "5px" }}>
                <Typography>Creator</Typography>
                <Typography>Creator</Typography>
              </Box>
            </Grid>
            <Grid xs={6} sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={avatar2}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "10px",
                }}
              />
              <Box sx={{ padding: "5px" }}>
                <Typography>Creator</Typography>
                <Typography>Creator</Typography>
              </Box>
            </Grid>
          </Grid>
          <Box margin={"10px"}>
            <img
              src={Image2}
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "5px",
              }}
            />
            <Typography variant="h5">Blue And Orange Abstract</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;

const HotCollectionCard = () => {
  return (
    <div>
      <Box marginX={"5px"} width={"200px"} style={{ borderRadius: "5px" }}>
        <img src={Image3} width={"100%"} />
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="body1">Phanta Bear</Typography>
          <Typography variant="body2" color={"gray"}>
            12 Items
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

const HotBids = () => {
  const cards = [
    {
      cardImage: "https://example.com/card1.jpg",
      avatarImage: "https://example.com/avatar1.jpg",
      title: "Card 1 sports",
      type: "sports",
    },
    {
      cardImage: "https://example.com/card2.jpg",
      avatarImage: "https://example.com/avatar2.jpg",
      title: "Card 2 sports",
      type: "sports",
    },
    {
      cardImage: "https://example.com/card3.jpg",
      avatarImage: "https://example.com/avatar3.jpg",
      title: "Card 3 sports",
      type: "sports",
    },
    {
      cardImage: "https://example.com/card4.jpg",
      avatarImage: "https://example.com/avatar4.jpg",
      title: "Card 4 art",
      type: "art",
    },
    {
      cardImage: "https://example.com/card5.jpg",
      avatarImage: "https://example.com/avatar5.jpg",
      title: "Card 5 art",
      type: "art",
    },
    {
      cardImage: "https://example.com/card6.jpg",
      avatarImage: "https://example.com/avatar6.jpg",
      title: "Card 6 art",
      type: "art",
    },
    {
      cardImage: "https://example.com/card7.jpg",
      avatarImage: "https://example.com/avatar7.jpg",
      title: "Card 7 gaming",
      type: "gaming",
    },
    {
      cardImage: "https://example.com/card8.jpg",
      avatarImage: "https://example.com/avatar8.jpg",
      title: "Card 8 gaming",
      type: "gaming",
    },
    {
      cardImage: "https://example.com/card9.jpg",
      avatarImage: "https://example.com/avatar9.jpg",
      title: "Card 9 gaming",
      type: "gaming",
    },
  ];

  const [selectedType, setSelectedType] = useState("all");

  function handleFilterClick(type) {
    setSelectedType(type);
  }

  function filterCards() {
    if (selectedType === "all") {
      return cards;
    } else {
      return cards.filter((card) => card.type === selectedType);
    }
  }

  const filteredCards = filterCards();

  return (
    <>
      <Box display={"flex"} padding={"5px"} justifyContent={"space-between"}>
        <Typography variant="h5">Hot Bids</Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => handleFilterClick("all")}>
            All
          </Button>
          <Button
            variant="contained"
            onClick={() => handleFilterClick("sports")}
          >
            Sports
          </Button>
          <Button variant="contained" onClick={() => handleFilterClick("art")}>
            Art
          </Button>
          <Button
            variant="contained"
            onClick={() => handleFilterClick("gaming")}
          >
            Gaming
          </Button>
        </Stack>
      </Box>
      <Grid container spacing={2}>
        {filteredCards.map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <img src={Image4} style={{ width: "100%" }} />
            <Typography variant="body1">{card.title}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
