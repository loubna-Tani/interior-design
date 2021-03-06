import React, { Component } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { DesignContext } from "../Context";
import StyledHero from "../components/StyledHero";



export default class SignleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      
    };
    
  }
  
  static contextType = DesignContext;

  //componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
   console.log(room)
    
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
            subtitle="Looking for ideas? Get inspired by rooms designed, beauty, delicious food recipes, travel, and more."
          >
            <Link to="/" className="btn-primary">
              Return Home
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-info">
            <article className="desc">
              <h3>discover our choices for this month</h3>
              <p>
              {description}
              </p>
            </article>
          </div>
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
        </section>
             </>
    );
  }
}
