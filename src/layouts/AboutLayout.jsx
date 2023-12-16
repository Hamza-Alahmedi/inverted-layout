import Navigation from "../components/Navigation";

export default function AboutLayout() {
  return (
    <div>
      <Navigation styleVariant="bg-white" />
      <div className="flex items-center justify-center">
        <div className="box">
          <div className="about-title">
            Hi, I'm a freelance product designer from London, UK
          </div>
          <p className="about-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            scelerisque odio nunc, quis malesuada ligula lobortis nec. In
            ultricies tellus ut lectus ornare dictum. Sed porttitor dapibus
            velit, nec blandit arcu finibus quis. Etiam nulla felis, imperdiet a
            nulla eget, rhoncus imperdiet elit. Curabitur tristique mi vitae
            ipsum euismod porta euismod vitae lectus. Vestibulum at pulvinar
            nisi, non commodo erat. Aliquam lobortis posuere magna sed
            tincidunt. Sed facilisis vestibulum eros eget varius. Nam eget velit
            sed neque dignissim rutrum. Nullam efficitur ornare tellus eget
            condimentum.
          </p>
        </div>
        <div>photo and media</div>
      </div>
    </div>
  );
}
