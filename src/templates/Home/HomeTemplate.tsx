import { About } from 'components/About';
import { Header } from 'components/Header';
import { HomeHero } from 'components/HomeHero';

import * as S from './styles';

export function HomeTemplate() {
  return (
    <S.Container>
      <Header />

      <main className="container">
        <HomeHero />
      </main>

      <section>
        <About />
      </section>
    </S.Container>
  );
}
