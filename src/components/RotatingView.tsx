import React from 'react';
import classes from './RotatingView.module.css';

const RotatingView: React.FunctionComponent = () => {
  let open: HTMLButtonElement;
  let close: HTMLButtonElement;
  let container: HTMLElement;
  React.useEffect(() => {
    open = document.getElementById('open') as HTMLButtonElement;
    close = document.getElementById('close') as HTMLButtonElement;
    container = document.querySelector(`.${classes.container}`) as HTMLElement;
    open.addEventListener('click', () =>
      container.classList.add(classes['show-nav'])
    );
    close.addEventListener('click', () =>
      container.classList.remove(classes['show-nav'])
    );
    return () => {
      open.removeEventListener('click', () =>
        container.classList.remove(classes['show-nav'])
      );
      close.removeEventListener('click', () =>
        container.classList.remove(classes['show-nav'])
      );
    };
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes['circle-container']}>
          <div className={classes.circle}>
            <div id="close" className={classes['close-button']}>
              <div className={classes['close-container']}>
                <div className={classes.leftright}></div>
                <div className={classes.rightleft}></div>
              </div>
            </div>
            <button id="open">
              <div className={classes.hambaga}></div>
              <div className={classes.hambaga}></div>
              <div className={classes.hambaga}></div>
            </button>
          </div>
        </div>

        <div className={classes.content}>
          <h1>Amazing city</h1>
          <small>3004</small>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia in ratione dolores cupiditate, maxime aliquid impedit dolorem
            nam dolor omnis atque fuga labore modi veritatis porro laborum
            minus, illo, maiores recusandae cumque ipsa quos. Tenetur,
            consequuntur mollitia labore pariatur sunt quia harum aut. Eum
            maxime dolorem provident natus veritatis molestiae cumque quod
            voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa.
            Corrupti, laudantium iure aliquam rerum sint nam quas dolor
            dignissimos in error placeat quae temporibus minus optio eum soluta
            cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
            consequuntur perferendis consequatur nobis exercitationem molestias
            fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
            deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
            facere earum unde harum. Ea culpa veritatis magnam at aliquid.
            Perferendis totam placeat molestias illo laudantium? Minus id minima
            doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
            temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
            explicabo provident. Voluptates sint, neque fuga cum illum, tempore
            autem maxime similique laborum odio, magnam esse. Aperiam?
          </p>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#"> About</a>
          </li>
          <li>
            <a href="#"> Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default RotatingView;
