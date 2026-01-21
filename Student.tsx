function Student() {
    return (
        <img src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"/>
    );
}
export default function Gallery() {
    return(
        <section>
            <h1>Amazing scientist</h1>
            <Student />
            <Student />
            <Student />
        </section>
    );
}