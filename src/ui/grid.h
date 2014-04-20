// Aseprite UI Library
// Copyright (C) 2001-2013  David Capello
//
// This file is released under the terms of the MIT license.
// Read LICENSE.txt for more information.

#ifndef UI_GRID_H_INCLUDED
#define UI_GRID_H_INCLUDED
#pragma once

#include "base/compiler_specific.h"
#include "ui/widget.h"

#include <vector>

namespace ui {

  class Grid : public Widget
  {
  public:
    Grid(int columns, bool same_width_columns);
    ~Grid();

    void addChildInCell(Widget* child, int hspan, int vspan, int align);

  protected:
    // Events
    void onResize(ResizeEvent& ev) OVERRIDE;
    void onPreferredSize(PreferredSizeEvent& ev) OVERRIDE;
    void onPaint(PaintEvent& ev) OVERRIDE;

  private:
    struct Cell {
      Cell* parent;
      Widget* child;
      int hspan;
      int vspan;
      int align;
      int w, h;

      Cell();
    };

    struct Strip {
      int size;
      int expand_count;
    };

    void sumStripSize(const std::vector<Strip>& strip, int& size);
    void calculateCellSize(int start, int span, const std::vector<Strip>& strip, int& size);
    void calculateSize();
    void calculateStripSize(std::vector<Strip>& colstrip,
                            std::vector<Strip>& rowstrip, int align);
    void expandStrip(std::vector<Strip>& colstrip,
                     std::vector<Strip>& rowstrip,
                     void (Grid::*incCol)(int, int));
    void distributeSize(const gfx::Rect& rect);
    void distributeStripSize(std::vector<Strip>& colstrip,
                             int rect_size, int border_size, bool same_width);
    bool putWidgetInCell(Widget* child, int hspan, int vspan, int align);
    void expandRows(int rows);
    void incColSize(int col, int size);
    void incRowSize(int row, int size);

    bool m_same_width_columns;
    std::vector<Strip> m_colstrip;
    std::vector<Strip> m_rowstrip;
    std::vector<std::vector<Cell*> > m_cells;
  };

} // namespace ui

#endif
