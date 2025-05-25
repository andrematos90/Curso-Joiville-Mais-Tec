import React from "react";
import StoreLayout from "../components/templates/StoreLayout";
import PlantGrid from "../components/organisms/PlantGrid";
import type { Plant } from "../types";

const mockPlants: Plant[] = [
  { id: "1", name: "Suculenta", price: 29.9, light: "sun" },
  { id: "2", name: "Samambaia", price: 39.9, light: "shade" },
  { id: "3", name: "Orquídea", price: 49.9, light: "shade" },
  { id: "4", name: "Espada-de-São-Jorge", price: 35.5, light: "sun" },
  { id: "5", name: "Zamioculca", price: 44.0, light: "shade" },
  { id: "6", name: "Babosa", price: 25.0, light: "sun" },
];

const PlantStore: React.FC = () => {
  return (
    <StoreLayout>
      <PlantGrid plants={mockPlants} />
    </StoreLayout>
  );
};

export default PlantStore;
