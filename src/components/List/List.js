import Column from '../Column/Column';
import style from './List.module.scss';
const List = () => {
    return (
      <div>
          <header className={ style.header }>
              <h2>Things to do<span>soon!</span></h2>
          </header>
          <p className={ style.description }>Interesting things I want to check out</p>
          <section className={ style.columns }>
            <Column title="Books" icon="book" />
            <Column title="Movies" icon="film" />
            <Column title="Games" icon="gamepad"/>
          </section>
      </div>
    );
  };
  
  export default List;