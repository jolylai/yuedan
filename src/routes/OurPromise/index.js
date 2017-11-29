import React from 'react';
import styles from './index.less';

const OurPromise = () => {
  return (
    <div className={styles.ourPromise}>
      <h2>Our Promise</h2>
      <div className={styles.promise}>
        <div>
          <p style={{ textAlign: 'center' }}>小月儿</p>
          <p>不管以后怎样，都能对彼此一心一意，好好地在一起，过我们想要的幸福快乐的生活。就算要付出很大的努力，也不要放弃对方！一直都能待彼此如初！我相信，只要我们有信心，有什么事情就共同面对，一起成长，相信有一天，我们所有期待的美好都会照进现实！</p>
        </div>
        <div>
          <p style={{ textAlign: 'center' }}>大傻子</p>
          <p>我没想过要隐瞒你，也不想辜负你对我毫不保留的付出。生怕我哪里惹到你生气，跟你在一起我就一直想着要和你好好在一起，和你走到最后。</p>
        </div>
      </div>
    </div>
  );
};

export default OurPromise;
