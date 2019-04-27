import React from "react"
import InstagramEmbed from "react-instagram-embed"
// import Axios from "axios"

class SideInstagram extends React.Component {
  // fetching = async () => {
  //   const token = "d80a1f1ba00548b98e1637ab57008a48"
  //   const data = await Axios.get(
  //     `https://api.instagram.com/v1/users/self/media/recent?access_token=${token}`
  //   )
  //   console.log(data)
  // }
  render() {
    // this.fetching()
    return (
      <InstagramEmbed
        url="https://www.instagram.com/p/BwruJvtlYtP/?utm_source=ig_web_button_share_sheet"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    )
  }
}

export default SideInstagram
