import React, { Component } from "react";
import { FaBabyCarriage, FaHiking, FaShuttleVan, FaWifi } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaBabyCarriage />,
        title: "BabySitting/Child Services",
        info:
          ""
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          ""
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          ""
      },
      {
        icon: <FaWifi />,
        title: "Free WiFi",
        info:
          ""
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
