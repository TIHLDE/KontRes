import { Box } from '@mui/system';
import { Header } from './Header';
import useBookableItems from '@/utils/hooks/useBookableItems';

/**
 * This is a component that wraps the entire content of the page. It adds default components
 * such as the header, and places the rest of the content accordingly.
 */
const SiteWrapper = ({ children }: { children: any }) => {
  const { data } = useBookableItems({});

  return (
    <Box
      sx={{
        minHeight: '100vh',
      }}>
      <Header
        sx={{
          position: 'absolute',
        }}
        items={data?.map((e) => {
          return {
            displayName: e.name,
            href: '#',
          };
        })}
      />
      {children}
    </Box>
  );
};

export default SiteWrapper;
