import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Areas from "../objects/areas/Areas";
import Desarrollo from "../models/desarrollos/Desarrollo";
import { getDesarrollosForArea } from "../objects/desarrollos/Desarrollos";
import { Area } from "../models/areas/Area";
import { useTranslation } from "../i18n.tsx";

interface PropsSlideshow {
  areas?: string[];
}

const SlideshowGallery = (props: PropsSlideshow) => {
  const { lang } = useTranslation();
  const [index, setIndex] = useState(0);
  const areaObjects: Area[] = (props.areas ? props.areas : Areas()) as any;

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex ?? 0);
  };

  const getLocalized = (field: any) => {
    if (!field) return "";
    if (typeof field === "object") return field[lang] || field.es || Object.values(field)[0] || "";
    return field;
  };

  // Build carousel items synchronously from available areas and desarrollos
  const items: React.ReactNode[] = [];
  areaObjects.forEach((areaObject: Area) => {
    const desSet = getDesarrollosForArea(areaObject) ?? new Set<Desarrollo>();
    [...desSet].forEach((x: Desarrollo, idx: number) => {
      const title = getLocalized(x.titulo) ||
        (x.nombre || "")
          .split("-")
          .map(
            (n) => n.charAt(0).toUpperCase() + n.substring(1)
          )
          .join(" ");
      const areaName = areaObject?.name || "";
      const imgUrl = `https://pagina-mama.s3.amazonaws.com/assets2/areas/${areaName}/${x.nombre}.webp`;
      items.push(
        <Carousel.Item
          key={`${areaName}-${x.nombre ?? idx}`}
          id={`carousel-${areaName}-${idx}`}
        >
          <div
            style={{
              width: "100%",
              height: "400px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url('${imgUrl}')`,
            }}
          />
          <Carousel.Caption>
            <h3 className="display-6 font-weight-bold">{title}</h3>
            <p className="lead font-weight-bold text-white">
              {getLocalized(areaObject?.titulo) || (areaName || "")
                .split("-")
                .map((n) => n.charAt(0).toUpperCase() + n.substring(1))
                .join(" ")}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  });

  if (items.length === 0) {
    return null;
  }

  return (
    <Container fluid>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls
        indicators
        interval={5000}
      >
        {items}
      </Carousel>
    </Container>
  );
};

export default SlideshowGallery;
