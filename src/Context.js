import React, { Component } from "react";
import Client from "./Contentful";

const DesignContext = React.createContext();

class DesignProvider extends Component {
  state = {
    rooms: [],
    DesignRooms: [],
    lifeStyleIdea:[],
    featuredRooms: [],
    shoppingIdea:[],
    loading: true,
    type: "all",
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
         content_type: "interiorDesign",
      });
      

      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter((room) => room.featured === true);
      let DesignRooms = rooms.filter((room) => room.type === "Design");
      let lifeStyleIdea = rooms.filter((room) => room.type === "lifestyles");
      let shoppingIdea =rooms.filter((room) => room.type === "shopping");
          

      this.setState({
        rooms,
        featuredRooms,
        DesignRooms,
       lifeStyleIdea,
       shoppingIdea,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let temItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
      return temItems;
    
  }
 
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
    
  };

  render() {
    return (
      <DesignContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </DesignContext.Provider>
    );
  }
}

const DesignConsumer = DesignContext.Consumer;
export { DesignProvider, DesignConsumer, DesignContext };
