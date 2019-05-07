import React from "react"
import styled from "styled-components"

const KakaoLogo = styled.img`
  margin: 0;
`
class KakaoShareButton extends React.Component {
  componentDidMount() {
    window.Kakao.init(process.env.GATSBY_KAKAO_API_KEY)
    // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: this.props.title,
        description: this.props.excerpt,
        imageUrl: `${this.props.rooturl}/${this.props.src}`,
        link: {
          mobileWebUrl: this.props.url,
          webUrl: this.props.url,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: this.props.url,
            webUrl: this.props.url,
          },
        },
      ],
    })
  }
  componentWillUnmount() {
    // 클린업을 안해주면 다른 위치로 이동해서 또 init하므로 오류발생
    window.Kakao.cleanup()
  }
  render() {
    return (
      <div id="kakao-link-btn">
        <KakaoLogo
          width={this.props.size}
          height={this.props.size}
          src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png"
        />
      </div>
    )
  }
}

export default KakaoShareButton
