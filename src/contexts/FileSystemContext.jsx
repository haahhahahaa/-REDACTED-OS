import { createContext, useContext, useState, useCallback } from 'react';

const FileSystemContext = createContext();

const INITIAL_FS = {
  name: 'root',
  type: 'folder',
  children: {
    Desktop: {
      type: 'folder',
      children: {
        "Calculator" : { type: 'apps', content: '', icon: 'https://img.icons8.com/fluency/48/calculator.png' },
        "Notepad" : { type: 'apps', content: '', icon: 'https://img.icons8.com/fluency/48/notepad.png' },
        "Chrome" : { type: 'apps', content: '', icon: 'https://img.icons8.com/fluency/48/chrome.png' },
        "Todo List" : { type: 'apps', content: '', icon: 'https://img.icons8.com/fluency/48/checkmark.png' },
        "Paint" : { type: 'apps', content: '', icon: 'https://img.icons8.com/fluency/48/microsoft-paint.png' },
      }
    },
    Documents: {
      type: 'folder',
      children: {
        'note.txt': { type: 'txt', content: '' },
      }
    },
    Downloads: {
      type: 'folder',
      children: {
        'installer.exe': { type: 'file', content: '' },
        'image.png': { type: 'image', content: '' }
      }
    },
    Pictures: {
      type: 'folder',
      children: {
        'screenshot.png': { type: 'image', content: '' }
      }
    },
    Music: {
      type: 'folder',
      children: {
        'song.mp3': { type: 'music', content: '' }
      }
    },
    Videos: {
      type: 'folder',
      children: {
        'rm-rf-meme.mp4': { type: 'video', content: '' }
      }
    }
  }
};

export const FileSystemProvider = ({ children }) => {
  const [fs, setFs] = useState(INITIAL_FS);

  const getNode = useCallback((pathArray) => {
    let current = fs;
    for (const key of pathArray) {
      if (current.children && current.children[key]) {
        current = current.children[key];
      } else {
        return null;
      }
    }
    return current;
  }, [fs]);

  const readdir = useCallback((pathArray) => {
    const node = getNode(pathArray);
    if (node && node.type === 'folder' && node.children) {
      return Object.entries(node.children).map(([key, value]) => ({
        name: key,
        ...value
      }));
    }
    return [];
  }, [getNode]);

  return (
    <FileSystemContext.Provider value={{ fs, readdir, getNode }}>
      {children}
    </FileSystemContext.Provider>
  );
};

export const useFileSystem = () => useContext(FileSystemContext);
