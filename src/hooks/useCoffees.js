import { useState, useEffect } from "react";

export default function useCoffees() {
  const [coffees, setCoffees] = useState([]);

  // GET request
  useEffect(() => {
    fetch("http://localhost:3000/coffees")
      .then((res) => res.json())
      .then(setCoffees);
  }, []);

  return { coffees, setCoffees };
}