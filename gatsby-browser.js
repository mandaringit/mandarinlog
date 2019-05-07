export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `이 앱이 최근 업데이트 되었습니다. ` +
      `최근 버전을 표시하기위해 새로고침 하시겠습니까?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
