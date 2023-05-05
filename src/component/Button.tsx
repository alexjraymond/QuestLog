import clsx from 'clsx';

export function Button(props: React.ComponentPropsWithoutRef<"button"> & {
    variant?: 'primary' | 'secondary' | 'ghost', size?: 'tiny' | 'small' | 'medium' | 'large'
}) {

function getButtonColor(variant?: 'primary' | 'secondary' | 'ghost') {
    switch (variant) {
        case 'primary':
        default:
            return 'bg-blue-400 hover:bg-blue-500';
        case 'secondary':
            return 'bg-green-400 hover:bg-green-500';
        case 'ghost':
            return 'bg-transparent hover:bg-gray-200 hover:bg-opacity-20 rounded-full';
    }
}

function getButtonSize(size?: 'tiny' | 'small' | 'medium' | 'large') {
    switch (size) {
      case 'tiny':
        return '';
      case 'small':
        return 'px-2 py-1 text-sm';
      case 'medium':
        return 'px-4 py-2 text-base';
      case 'large':
        default:
        return 'px-6 py-3 text-lg';
    }
  }

  const size = getButtonSize(props.size);

const color = getButtonColor(props.variant)

return (
    <button
        {...props}
        className={clsx("rounded", color, size)}
        type="button"
        >
            {props.children}
    </button>

)

}