import { useState, useEffect } from "react"
import { copy, link, loading, tick}  from
'../assets'
import { useLazyGetSummaryQuery } from "../Services/Artcile";

const Demo = () => {
  const [article, setArticle] = useState ({
    url:'',
    summary:'',
  });
  
  const [allArticles, setAllArticles] = useState([]);


  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

  useEffect(() => {\
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem('artciles')
    )
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

      const {data} = await getSummary({
        articleUrl: article.url
      });

      if (data?.summary) {
        const newArticle = {
          ...article, summary: data. summary
        };

        const updatedAllArticles = [newArtcile, ...allArticles]
        setArticle(newArticle);
        setAllArticles(updatedAllArticles);

        console.log(newArticle);
      }
  }
  return (
    <section className='mt-16 w-full max-w-xl'>
      {/*Search*/}
      <div className='flex flex-col w-full
      gap-2'>
        <form className='relative flex 
        justify-center items-center'
        onSubmit={handleSubmit } >
          <img 
          src={link}
          alt='link_icon'
          className='absolute left-0 my-2
          ml-3 w-5'
          />
          <input
          type='url'
          placeholder='Enter a URL'
          value={article.url}
          onChange={(e) => setArticle({
            ...article, url: e.target.value})}
          required
          className='url_input peer'
          />
          <button
          type='submit'
          className='submit_btn'
          >
            ↩️
          </button>
        </form>
        {/*Browser URL history*/}
      </div>

      {/*Display result */}
    </section>
  )
}

export default Demo