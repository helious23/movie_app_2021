import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location.state);
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        <span>{location?.state?.title}</span>
      </div>
    );
  }
}

export default Detail;
