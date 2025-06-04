import React from "react";
import PlantIcon from "../atoms/PlantIcon";
import PriceTag from "../atoms/PriceTag";
import Button from "../atoms/Buttons";
import styles from "./PlantCard.module.css";
import type { Plant } from "../../types/Plant";

type PlantCardProps = {
  plant: Plant;
};

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <PlantIcon size="lg" />
        <span className={styles.light}>
          {plant.light === "sun" ? "☀️ Sol" : "🌑 Sombra"}
        </span>
      </div>
      <h3 className={styles.name}>{plant.name}</h3>
      <PriceTag value={plant.price} />
      <Button variant="primary">Comprar</Button>
    </div>
  );
};

export default PlantCard;