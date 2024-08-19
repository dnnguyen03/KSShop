import React, { useCallback, useEffect, useRef } from "react"
import "./Section2.css"

export default function Section2() {
  const allArticleRef = useRef(null)
  const updateCount = (el) => {
    const value = parseInt(el.dataset.value)
    const increment = Math.ceil(value / 10000)
    let initialValue = 0
    const increaseCount = setInterval(() => {
      initialValue += increment
      if (initialValue > value) {
        el.textContent = value + "K+"
        clearInterval(increaseCount)
        return
      }
      el.textContent = initialValue + "+"
    }, 1)
  }

  const handleIntersection = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const allArticle = entry.target.querySelectorAll("span.number")
        allArticle.forEach((item) => {
          updateCount(item)
        })
        observer.unobserve(entry.target)
      }
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.8,
    })
    const currentRef = allArticleRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [handleIntersection])
  return (
    <section className="Section2">
      <div className="content-section2 container" ref={allArticleRef}>
        <article>
          <span className="number" data-value="8">
            8
          </span>
          <p>Phong cách nổi bật</p>
        </article>
        <div className="vertical-divider"></div>
        <article>
          <span className="number" data-value="12"></span>
          <p>Cung cụ tìm kiếm thời trang</p>
        </article>
        <div className="vertical-divider"></div>
        <article>
          <span className="number" data-value="108"></span>
          <p>Người mua sắm toàn cầu</p>
        </article>
        <div className="vertical-divider"></div>
        <article>
          <span className="number" data-value="310"></span>
          <p>Phong cách thịnh hành</p>
        </article>
      </div>
    </section>
  )
}
