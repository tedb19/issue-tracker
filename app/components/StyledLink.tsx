import { Link as RadixLink } from "@radix-ui/themes";
import NextLink from "next/link";

/**
 * Here, we'd like to use radix's Link component, to ensure that the styles stay
 * consistent, and always matches the theme.
 * However, we also want to use next's Link to ensure we are not reloading the
 * page on navigation, i.e. we are doing client side navigation.
 * For these 2 to work together, we need to do the following:
 * 
 * If the child of Link is a custom component that wraps an <a> tag,
 * you must add passHref to Link.
 * This is necessary if you’re using libraries like styled-components.
 * Without this, the <a> tag will not have the href attribute,
 * which hurts your site's accessibility and might affect SEO.
 * If you're using ESLint, there is a built-in rule next/link-passhref
 * to ensure correct usage of passHref.
 *
 * https://nextjs.org/docs/pages/api-reference/components/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
 */

interface Props {
  href: string;
  children: string;
}

const StyledLink = ({ children, href }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default StyledLink;
