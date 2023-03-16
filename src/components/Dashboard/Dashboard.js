/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Dropdown, Input, Button } from "semantic-ui-react";
import images from "../../images";
import "../Dashboard/Dashboard.css";

const Dashboard = ({ filterOptions }) => {
  const [img, setImg] = useState(images);
  const filterStyle = {
    width: 300,
    marginTop: 20,
    left: "72.7%",
  };

  const handleLabelChange = (event, index) => {
    const newImages = [...img];
    newImages[index].label = event.target.value;
    setImg(newImages);
  };

  const handleDelete = (index) => {
    const newImages = [...img];
    newImages[index].label = "";
    setImg(newImages);
  };

  const filterImages = (selectedValue) => {
    const filteredImages =
      selectedValue === "All"
        ? images
        : images.filter((image) => image.category === selectedValue);
    setImg(filteredImages);
  };

  return (
    <div>
      <Navbar />
      <Dropdown
        placeholder="Filter by label"
        fluid
        selection
        options={filterOptions}
        style={filterStyle}
        onChange={(e, data) => {
          filterImages(data.value);
        }}
      />

      {img.map((image, index) => (
        <div className="image-card" key={index}>
          <div className="image-container">
            <img src={image.path} alt="image" />
            <p>{image.label}</p>
            <div className="action">
              <Input
                placeholder="Assign label"
                onChange={(e) => handleLabelChange(e, index)}
              />
              <Button
                basic
                color="red"
                style={{ marginTop: 10 }}
                onClick={() => handleDelete(index)}
              >
                Delete Label
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
