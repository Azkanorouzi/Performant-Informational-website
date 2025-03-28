

export default function MetaTags({pageTitle, description, keywords, facebookImg, faceBookUrl, lang}) {
  return (
    <>
    <title>{pageTitle}</title>
        <meta type="kewords" content={keywords}/> 
        <meta type="description" content={description}/>
        <meta name={"robots"} content="index,follow"/>
        <meta http-equiv="Content-Language" content={lang} />

        <meta name="author" content="Azka norouzi" />

        <meta property="og:title" content={pageTitle}/>
        <meta property="og:description" content={description} />
        <meta property="og:image" content={facebookImg} />
        <meta property="og:url" content={faceBookUrl} />

        <meta property="og:image" content="" />
    </>
  )
}
