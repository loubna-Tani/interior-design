import React, { Component } from "react";
import defaultBcg from "../images/design2.jpg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { DesignContext } from "../Context";
import StyledHero from "../components/StyledHero";

export default class SignleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = DesignContext;
  //componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/Design" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const { name, images, description } = room;
    const [mainImag, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImag}>
          <Banner
            title={`${name} Inspirations`}
            subtitle="Looking for ideas? Get inspired by rooms designed in a range of styles—then just click to shop the room!"
          >
            <Link to="/" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
          </div>
        </section>
      </>
    );
  }
}
