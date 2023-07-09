import { ReactNode } from "react";
import styled from "styled-components";

type TFooterBrand = {
  children?: ReactNode
}

const FooterBrand = ({ children }: TFooterBrand) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`

`

export default FooterBrand
