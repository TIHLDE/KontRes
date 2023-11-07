import { Box } from '@mui/system';
import { Header } from './Header';
import useBookableItems from '@/utils/hooks/useBookableItems';
import { DetailedItem } from '@/apis/reservations/types';

/**
 * This is a component that wraps the entire content of the page. It adds default components
 * such as the header, and places the rest of the content accordingly.
 */
const SiteWrapper = ({ children, headerItems }: { children: any; headerItems?: DetailedItem[] }) => {
  console.log(headerItems);
  const { data } = useBookableItems({ initialData: headerItems });

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
