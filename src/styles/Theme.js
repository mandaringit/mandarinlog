export const Theme = {
  mainColor: "#ffc107",
  thinMainColor: "#FFCA28",
  backgroundColor: "#F0F0F0",
  hoverColor: "#cfd8dc",
  grayColor: "#333333",
  barColor: "#BDBDBD",
  deepOrangeColor: "#FF8A65",
  mainBackgroundColor: "#FAFAFA",
  postBackgroundColor: "#FAFAFA",
  postBorderColor: "#e6e6e6",
  templateMaxWidth: "900px",
  mainCardHeight: "15rem",
  stackColor: props => {
    if (props.stack === "NodeJs") {
      return "#216E00"
    } else if (props.stack === "JavaScript") {
      return "#F7DF1E"
    } else if (props.stack === "Prisma") {
      return "#0F334B"
    } else if (props.stack === "GraphQL") {
      return "#E31CA4"
    } else if (props.stack === "React") {
      return "#61DAFB"
    } else if (props.stack === "Go") {
      return "#375DAB"
    } else if (props.stack === "VSC") {
      return "#0079CC"
    } else if (props.stack === "GatsbyJS") {
      return "#663399"
    } else {
      return "#636e72"
    }
  },
  stackBackColor: props => {
    if (props.stack === "JavaScript") {
      return "black"
    } else {
      return "transparent"
    }
  },
  platformColor: props => {
    if (props.platform === "Netflix") {
      return "#e52811"
    } else if (props.platform === "영화관") {
      return "#6c5ce7"
    } else if (props.platform === "MARVEL") {
      return "white"
    } else {
      return "black"
    }
  },
  platformBackColor: props => {
    if (props.platform === "Netflix") {
      return "black"
    } else if (props.platform === "영화관") {
      return "black"
    } else if (props.platform === "MARVEL") {
      return "#D74124"
    } else {
      return "gray"
    }
  },
  albumCategoryColor: props => {
    if (props.category === "싱글") {
      return "#487eb0"
    } else if (props.category === "EP") {
      return "#673AB7"
    } else if (props.category === "정규") {
      return "#273c75"
    }
  },
}
