import React from "react";
import PlantCard from "../molecules/PlantCard";
import styles from "./PlantGrid.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

type Plant = {
  id: number;
  name: string;
  price: number;
  light: "sun" | "shade";
};

type PlantGridProps = {
  plants: Plant[];
};

const PlantGrid: React.FC<PlantGridProps> = ({ plants }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 960px)");

  const columns = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <div
      className={styles.grid}
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
};

export default PlantGrid;
